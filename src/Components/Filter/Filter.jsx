import React from "react";
import PropTypes from "prop-types";
import Input from "../Input/Input";
import Label from "../Label/Label";
import { useDispatch } from "react-redux";
import { filterContacts } from "../../Redux/reducers";
const Filter=()=> {
  const dispatch = useDispatch();
  const filterName = (evt) => {
    dispatch(filterContacts(evt.target.value))
  }

 return (<div>
    <Label text="Find contact by name:" />
    <Input
      type="text"
      name="filter"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      onChange={filterName}
      title="Input a name"
    />

  </div>)
}
Filter.propTypes = {
  filterName: PropTypes.func,
};
export default Filter;
