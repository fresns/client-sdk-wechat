/*!
 * Fresns 微信小程序 (https://fresns.cn)
 * Copyright 2021-Present 唐杰
 * Licensed under the Apache-2.0 license
 */
import { fresnsApi } from '../../../services/api';
import { fresnsConfig, fresnsLang } from '../../../helpers/configs';

Component({
  /** 组件的初始数据 **/
  data: {
    dialog: false,
    wrap: false,
    title: null,
    placeholder: null,
    barWords: null,
    cancel: null,

    inputShowed: false,
    inputVal: '',
    isFocus: false,

    users: [],
  },

  /** 组件生命周期声明对象 **/
  lifetimes: {
    attached: async function () {
      this.setData({
        dialog: true,
        wrap: true,
        inputShowed: true,

        title: await fresnsLang('editorMention'),
        placeholder: await fresnsLang('search'),
        barWords: await fresnsConfig('user_name'),
        cancel: await fresnsLang('cancel'),
      });
    },
  },

  /** 组件功能 **/
  methods: {
    close() {
      this.triggerEvent('eventDialogShow', { type: 'mention' });

      this.setData({
        dialog: false,
        wrap: false,
      });
    },

    // 触发搜索
    showInput() {
      this.setData({
        inputShowed: true,
      });
    },

    // 隐藏搜索
    hideInput() {
      this.setData({
        inputShowed: false,
        inputVal: '',
        users: [],
      });
    },

    // 输入框失去焦点时触发
    blurInput() {
      this.setData({
        isFocus: false,
      });
    },

    // 清除
    clearInput() {
      this.setData({
        inputVal: '',
        users: [],
      });
    },

    // 键盘输入时触发
    inputTyping(e) {
      this.setData({
        inputVal: e.detail.value,
        isFocus: true,
      });
    },

    // 点击完成按钮（搜索）
    inputConfirm: async function (e) {
      const resultRes = await fresnsApi.common.inputTips({
        type: 'user',
        key: e.detail.value,
      });

      if (resultRes.code != 0) {
        return;
      }

      this.setData({
        users: resultRes.data,
      });
    },

    // 选择用户
    onSelectUser(e) {
      const fsid = e.currentTarget.dataset.fsid;

      if (!fsid) {
        return;
      }

      const text = '@' + fsid + ' ';

      this.triggerEvent('eventInsertContent', { value: text });
      this.close();
    },
  },
});
