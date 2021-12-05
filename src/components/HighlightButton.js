// deprecated: example

export default function HighlightButton({ mode, setMode, value }) {
  const trueTemplate = (<b>{value}</b>)
  const falseTemplate = (<>{value}</>)
  return (<button onClick={()=>setMode(value)}>{ mode === value ? trueTemplate : falseTemplate }</button>)
}
