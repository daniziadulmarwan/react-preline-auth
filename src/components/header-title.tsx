interface Props {
  title: string;
}

function HeaderTitle(props: Props) {
  return <div>{props.title}</div>;
}

export default HeaderTitle;
