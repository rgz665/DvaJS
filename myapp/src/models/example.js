// 处理数据和逻辑
export default {
  // 表示在全局 state 上的 key
  namespace: 'example',
  // 是初始值，状态数据
  state: {
    name:"state的名字多吃点"
  },
  // 订阅数据源
  subscriptions: {
    // 监听路由
    // ubscriptions 只是定义了一个地方，用来订阅数据。 subscriptions函数会有入参dispatch和history
    setup({ dispatch, history }) {  // eslint-disable-line
      history.listen(({ pathname }) => {
        // 监听路由的变化 dispatch指定的方法
      })
    },
    // websocket连接
    // 键盘监听keyEvent
  },
  // 处理异步逻辑（副作用， 流向reducers， 最终改变State）
  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },
  // 同步更新state(等同于 redux 里的 reducer，接收 action，同步更新 state)
  reducers: {
    save(state, {payload : name}) {
      return { ...state, name }
    },  


    // count +1
    // function add(state) { return state + 1; }
    // 往 [] 里添加一个新 todo
    // function addTodo(state, action) { return [...state, action.payload]; }


  },
};
