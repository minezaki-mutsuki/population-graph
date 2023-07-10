import '../example/style.css';

type ExampleProps = {
  onClick: () => void;
};

export const Example = ({ onClick }: ExampleProps) => {
  return (
    <div className="example" onClick={() => onClick()}>
      Example
    </div>
  );
};
