import './App.css'

function App() {

const keyword = "redirecturl" //これのValueをリンクとする
const qryParam = new URLSearchParams(location.search)
const url = qryParam.get(keyword)??undefined;
return (
  <>
    <a href={url} target="_blank" rel="noopener noreferrer"> {url}</a>
  </>)
}

export default App