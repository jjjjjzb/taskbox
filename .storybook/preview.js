import '../src/index.css';

//👇 Configures Storybook to log the actions( onArchiveTask and onPinTask ) in the UI.
//actions允许我们创建回调来决定当点击事件发生时 Storybook UI 的actions面板将如何显示。
//这样当我们创建了一个 pin 按钮后，我们就可以在测试 UI 中查看该按钮是否被点击成功了。 
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
