## redux ##

1、定义action

action就是一个带有type字段的对象，可以通过**action创建函数**进行创建数据；
除了type字段其余字段皆可自定义，利用此传入更新的数据，比如：
	
    function addTodo(text) {
		return {
			type: ADD_TODO,
    		text
		}
	}

2、设计reducer

reducer就是个纯函数，接受旧的state和action返回新的state

    (previousState, action) => newState

3、创建store

通过ceateStore创建，todoApp即为设计的reducer函数

    let store = createStore(todoApp, window.STATE_FROM_SERVER)

4、应用

通过store.dispatch(action)更新state，通过getState()获取state

5、其他

可通过store.subscribe(listener)注册监听器，该方法会返回一函数，执行即可注销监听器
    
    // 每次 state 更新时，打印日志
    // 注意 subscribe() 返回一个函数用来注销监听器
    const unsubscribe = store.subscribe(() =>
     	console.log(store.getState())
    )
	
	// 注销监听 state 更新
	unsubscribe();

## react-redux ##

react-redux一个插件库，作用在于简化redux，通过给UI组件包裹容器组件的模式实现state的管理

1、通过connect()()创建容器组件

connect(mapStateToProps, mapDispatchToProps)接收两个回调函数作为参数，并返回一个函数，接收定义的**UI组件**作为参数

    // mapStateToProps(state)：将状态数据state传递给UI组件，UI组件可通过props获取
    // mapDispatchToProps(dispatch)：将操作状态的方法dispatch传递给UI组件，UI组件可通过props获取

    const mapStateToProps = (state) => {
      return {
    	count: state,
      }
    }
    
    const mapDispatchToProps = (dispatch) => {
      return {
    	add: (number) => dispatch(createIncrementAction(number)),
    	sub: (number) => dispatch(createDecrementAction(number)),
    	addAsync: (number) => dispatch(createIncrementAsyncAction(number, time)),
      }
    }
