import { CardComponentConfig } from "./card";
import { CopyComponentConfig } from "./copy";
import { DocComponentConfig } from "./doc";
import { FooterComponentConfig } from "./footer";
import { GridComponentConfig } from "./grid";
import { ImageComponentConfig } from "./img";
import { IntroComponentConfig } from "./intro";
import { AdvancedListComponentConfig, ListComponentConfig } from "./list";
import { MediaComponentConfig } from "./media";
import { PhoneComponentConfig } from "./phone";
import { SwiperComponentConfig } from "./swiper";
import { TextComponentConfig } from "./text";
import { TitleComponentConfig } from "./title";

export * from "./card";
export * from "./copy";
export * from "./doc";
export * from "./footer";
export * from "./grid";
export * from "./img";
export * from "./intro";
export * from "./list";
export * from "./media";
export * from "./phone";
export * from "./swiper";
export * from "./text";
export * from "./title";

export type PageTag =
  | "title"
  | "text"
  | "img"
  | "list"
  | "footer"
  | "grid"
  | "card"
  | "copy"
  | "intro"
  | "advanced-list"
  | "doc"
  | "phone"
  | "media"
  | "swiper";

export type ComponentConfig =
  | TitleComponentConfig
  | TextComponentConfig
  | ImageComponentConfig
  | ListComponentConfig
  | AdvancedListComponentConfig
  | GridComponentConfig
  | FooterComponentConfig
  | DocComponentConfig
  | PhoneComponentConfig
  | SwiperComponentConfig
  | MediaComponentConfig
  | CardComponentConfig
  | CopyComponentConfig
  | IntroComponentConfig;

/** 页面配置 */
export interface PageConfig {
  /** 页面标题 */
  title: string;
  /** 页面描述 */
  desc?: string;
  /** 页面作者 */
  author?: string;
  /** 页面最后更新时间 */
  time?: string;
  /** 页面标识 */
  id: string;
  /** 是否是灰色背景 */
  grey?: boolean;
  /** 页面内容 */
  content: ComponentConfig[];
  /** 页面图片 */
  images?: string[];
  /**
   * 是否可以使用小程序的界面分享
   *
   * @default false
   */
  shareable?: boolean;
  /**
   * 是否在分享弹出菜单中显示联系客服
   *
   * @default true
   */
  contact?: boolean;
  /**
   * 是否在分享弹出菜单中显示反馈页面
   *
   * @default true
   */
  feedback?: boolean;
  /** 是否隐藏导航栏 */
  hidden?: boolean;
}
