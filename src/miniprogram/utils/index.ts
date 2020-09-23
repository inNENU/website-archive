import {
  AdvancedListComponentItemConfig,
  GridComponentItemComfig,
  ListComponentItemConfig,
  PageConfig,
} from "../typings";

export const decode = (text: string): string =>
  text.replace(/\n/gu, "<br />").replace(/\s/gu, "&ensp;");

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getConfig = (config: Record<string, any>): Record<string, any> => {
  const resolvedConfig = Object.assign({}, config);

  if (resolvedConfig.style) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    resolvedConfig.myStyle = resolvedConfig.style;
    delete resolvedConfig.style;
  }

  delete resolvedConfig.tag;

  return resolvedConfig;
};

export const getIcon = (icon: string): string =>
  `https://mp.innenu.com/res/icon/${icon}.svg`;

/**
 * 获得界面数据，生成正确的界面数据
 *
 * @param page 页面数据
 * @param option 页面传参
 *
 * @returns 处理之后的page
 */
export const getPage = (page: PageConfig): PageConfig => {
  if (page.content)
    page.content.forEach((element) => {
      // 设置 list 组件
      if ("content" in element)
        element.content.forEach(
          (
            listElement:
              | AdvancedListComponentItemConfig
              | GridComponentItemComfig
              | ListComponentItemConfig
          ) => {
            // 设置列表导航
            if ("url" in listElement) listElement.url += `?from=${page.title}`;
            if ("path" in listElement)
              listElement.url = `/${listElement.path as string}?from=${
                page.title
              }`;
          }
        );
    });

  return page; // 返回处理后的 page
};
