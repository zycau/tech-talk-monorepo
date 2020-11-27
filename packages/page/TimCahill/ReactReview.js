import React, {useState, createContext, useContext, useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route, Link, useParams, useHistory, useLocation, useRouteMatch} from 'react-router-dom'

// // 1. Add props to lower component
// const High = (comp) => {
//     const Comp = comp
//     return (props)=>(
//         <Comp {...props} selectLevel={'Senior'} />
//     )    
// }

// const LowComp = ({selectLevel, number}) => {
//     return (
//         <div>
//             <p>{selectLevel}</p>
//             <p>{number}</p>
//         </div>
//     )
// }

//  export default High(LowComp)


// 2. WithToggle是HOC，在第一种写法中，Toggler是中间层的component；在第二种写法中，没有Toggler，将其逻辑放入WithToggle中。
// // 第一种写法：
// const WithToggle = (comp, defaultValue) =>{
//     return (props)=>(
//         <Toggler comp={comp} defaultValue={defaultValue} {...props} />
//     )
// }

// const Toggler = (props)=>{
//     const {comp, defaultValue} = props
//     const Comp = comp
//     const [on, setOn] = useState(defaultValue)
//     const toggle = ()=>{
//         setOn(!on)
//     }
//     return (
//         <Comp on={on} toggle={toggle} {...props}/>
//     )
// }

// // 第二种写法：逻辑最好放入return的component中，如下。
// const WithToggle = (comp, defaultValue) =>{    
//     // HOC返回一个函数，在函数中返回子元素。
//     return (props)=>{
//         const Comp = comp
//         const [on, setOn] = useState(defaultValue)
//         const toggle = ()=>{
//             setOn(!on)
//         }

//         return <Comp on={on} toggle={toggle} {...props} />
//     }
// }

// const Comp1 = (props) => (
//     <div>
//         <p>{props.on ? 'true' : 'false'}</p>
//         <p>{props.number}</p>
//         <button onClick={props.toggle}>Toggle</button>
//     </div>
// )

// export default WithToggle(Comp1, false)


// 3. render props
// 父元素表示UI
// const FatherComp = (props) => {
//     // 子元素包裹一个函数，返回UI 
//     return (
//         <SonComp {...props} defaultValue={true}> 
//             {(on, toggle) => (
//                 <div>
//                     <p>Render Props</p>
//                     <p>{on ? 'true' : 'false'}</p>
//                     <p>{props.number}</p>
//                     <button onClick={toggle}>Toggle</button>
//                 </div>
//             )}
//         </SonComp>
//     )
// }

// // 子元素代表逻辑
// const SonComp = (props) => {
//     const [on, setOn] = useState(props.defaultValue)
//     const toggle = ()=>{
//         setOn(!on)
//     }

//     return (
//         <>{props.children(on, toggle)}</>
//     )
// }

// export default FatherComp

// ***HOC相当于将子元素以argument的形式传进父元素，父元素返回的函数式component中写逻辑，并将子元素返回。
// ***Render props相当于一个子元素（逻辑）可以被不同的父元素使用，父元素的返回的子元素中包裹一个函数，其中写UI。


// 4. Context API
// 创建Context
// const practiceContext = createContext()

// export const PracticeProvider = ({children}) => {
//     const [on, setOn] = useState(false)
//     const toggle = ()=>{
//         setOn(!on)
//     }

//     return (
//         <practiceContext.Provider value={{
//             on: on,
//             toggle: toggle
//         }}>
//             {children}
//         </practiceContext.Provider>
//     )
// }

// export const SonComp = (props) => {
//     const contextValue = useContext(practiceContext)
//     const {on, toggle} = contextValue
//     return (
//         <div>
//             <p>Context API</p>
//             <p>{on ? 'true' : 'false'}</p>
//             <p>{props.number}</p>
//             <button onClick={toggle}>Toggle</button>
//         </div>
//     )
// }


// 5. Custom hooks
// const useToggle = (defaultValue) => {
//     const [status, setStatus] = useState(defaultValue)

//     useEffect(() => {
//         console.log(status)
//     }, [status])
    
//     const goTrue = () => {
//         setStatus(true)
//     }
//     const goFalse = () => {
//         setStatus(false)
//     }

//     return [status, goTrue, goFalse]
// }

// const Comp = props => {
//     const [on, goTrue, goFalse] = useToggle(true)

//     return (
//         <div>
//             <p>Custom hooks</p>
//             <p>{on ? 'true' : 'false'}</p>
//             <p>{props.number}</p>
//             <button onClick={goTrue}>True</button>
//             <button onClick={goFalse}>False</button>
//         </div>
//     )
// }

// export default Comp


// 6. Router
const Nav = () =>{
    return (
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/products'>Products</Link></li>
            <li><Link to='/about'>About</Link></li>        
        </ul>
    )
}

const Home = () => {
    return (
        <>
        <Nav />
        <div>This is Home page</div>
        </>

    )
}

const Products = ({ids}) =>{
    
    return (
        <>
        <Nav />
        <div>Products</div>
        <ul>
            {ids.map(i => (
                <li key={i}><Link to={`/product/${i}`}>Product {i}</Link></li>
            ))}
        </ul>
        </>
    )
}

const About = () =>{
    return (
        <>
        <Nav />
        <div>About us</div>
        </>
    )
}

const Product = ({ids}) => {
    const {id} = useParams()

    // useRouteMatch会返回path和url，如果传入参数，则只有当前路径匹配传入的参数时，match才不为null
    const match = useRouteMatch('/product/2')

    if(!ids.some(i => i==id)) {
        useHistory().push({
            pathname: '/error',
            state: id   // push的时候向目标页面传入参数
        })
    }
    return (
        <>
        <Nav />
        <div>
            This is product {id}
        </div>
        {match && <div>Yeah, you got product number 2!</div>}
        </>
    )

}

const Error = () => {
    // 使用push时传下来的参数
    const {state} = useLocation()

    return (
        <>
        <Nav />
        <div>No product with id {state ? state : 'number doesn\'t exist'}</div>
        </>
    )
}

const Pages = () => {
    const ids = [1, 2, 3, 4, 5]
    return (
        <Router>
            <div>
                <Switch>
                    <Route path='/' exact>
                        <Home />
                    </Route>
                    <Route path='/products'>
                        <Products ids={ids}/>
                    </Route>
                    <Route path='/about'>
                        <About />
                    </Route>
                    <Route path='/product/:id'>
                        <Product ids={ids}/>
                    </Route>
                    <Route path='/error'>
                        <Error />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default Pages