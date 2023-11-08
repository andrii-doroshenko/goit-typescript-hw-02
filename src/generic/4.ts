/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface Props {
  title: string;
}

class Component<T extends Props> {
  props: T;

  constructor(props: T) {
    this.props = props;
  }
}

class Page<T extends Props> extends Component<T> {
  pageInfo() {
    console.log(this.props.title);
  }
}
