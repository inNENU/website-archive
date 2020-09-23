/** 菜单项 */
export interface MenuItem {
  key: string;
  title: string;
  icon?: boolean | string;
  children?: MenuItem;
}

/** 侧边栏状态 */
export interface SlideState {
  icon: string;
  title: string;
  list: MenuItem[];
}

const slideState: SlideState = {
  icon: "",
  title: "",
  list: [],
};

export default {
  state: slideState,
  mutations: {
    /**
     * 设置 Slide 菜单内容
     *
     * @param state state
     * @param menuContent Slide 菜单内容
     */
    menuList(state: SlideState, menuContent: MenuItem[]): void {
      state.list = menuContent;
      if (menuContent.length === 0) {
        state.title = "";
        state.icon = "";
      }
    },

    /**
     * 设置 Slide 菜单标题
     *
     * @param state state
     * @param title Slide标题内容
     */
    menuTitle(state: SlideState, title: string): void {
      state.title = title;
    },

    /**
     * 设置 Slide 菜单图标
     *
     * @param state state
     * @param icon Slide图标内容
     */
    menuIcon(state: SlideState, icon: string): void {
      state.icon = icon;
    },
  },
};
