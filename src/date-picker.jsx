import React, { Component } from "react";
import * as $ from "jquery";
import "@chenfengyuan/datepicker/dist/datepicker";
import "@chenfengyuan/datepicker/dist/datepicker.css";

export class DatePicker extends Component {
  componentDidMount() {
    $(this.input).datepicker();
  }

  input;

  refInput = ref => {
    this.input = ref;
  };

  render() {
    return <input ref={this.refInput} />;
  }
}
