export default function OptionSelection({ arrayItems, selectOption }) {
  return (
    <>
      <h1 className="heading">React chat app</h1>
      <div className="grid-main">
        {arrayItems.map((item) => {
          return (
            <div
              className="grid-child"
              onClick={() => selectOption(item.option)}
            >
              <h4>{item.name}</h4>
              <p>{item.desciption}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
