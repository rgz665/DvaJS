import dva from 'dva';
import './index.css';

// 1. 初始化
// React-Router、React、Redux-saga
const app = dva();

// 2. Plugins
app.use({});

// 3. Model
app.model(require('./models/example').default);

// 4. 路由
app.router(require('./router').default);

// 5. 启动应用
app.start('#root');
