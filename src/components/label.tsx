interface Props {
  title: string;
  htmlFor?: string;
  className?: string;
}

function Label(props: Props) {
  return (
    <label
      htmlFor={props.htmlFor}
      className={`${props.className} text-base font-semibold mb-[10px]`}
    >
      {props.title}
    </label>
  );
}

export default Label;
