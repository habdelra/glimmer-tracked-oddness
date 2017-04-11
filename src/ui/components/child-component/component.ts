import Component, { tracked } from "@glimmer/component";

export default class ChildComponent extends Component {

  @tracked ("args.model.foo")
  get foo() {
    return this.args["model"].foo;
  }

}
