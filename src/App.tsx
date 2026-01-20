import "./App.css";

function App() {
  const keyword = "redirecturl"; //これのValueをリンクとする
  const qryParam = new URLSearchParams(location.search);
  const url = qryParam.get(keyword);
  return (
    <>
      {url && (
        <a href={url} target="_blank" rel="noopener noreferrer">
          {url}
        </a>
      )}
      {!url && <p style={{ color: "#eeeeee" }}>{"パラメータが存在しません"}</p>}
    </>
  );
}

export default App;
