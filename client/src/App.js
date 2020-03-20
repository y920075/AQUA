import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Blog from './pages/blog/Blog'
import BlogContent from './pages/blog/BlogContent'
import BlogAdd from './pages/blog/BlogAdd'
import BlogEdit from './pages/blog/BlogEdit'

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/blogcontent">
            <BlogContent />
          </Route>
          <Route path="/blogadd">
            <BlogAdd />
          </Route>
          <Route path="/blogedit">
            <BlogEdit />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default App
