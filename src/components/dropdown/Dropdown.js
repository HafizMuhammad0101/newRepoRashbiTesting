import React, { useContext } from 'react';
import "./dropdown.css";
import img from "../../assets/images/icon _dots.png";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setData } from '../../redux/actions';
import Button from '../button/Button';
export default function Dropdown(props) {
  const dispatch = useDispatch();
  const sendItemData = () => {
    const ITEM = props.ITEM;
    dispatch(setData(ITEM));
  }
  var numberOfItems = props.numberOfItems

  return (
    <div className="dropParent">
      <div className="dropend" style={{ height: '115px' }}>
        <button type="button" className="dropdownBtn" data-bs-toggle="dropdown" aria-expanded="false">
          <img src={img} alt="dropdown icon" />
        </button>
        <ul className="dropdown-menu dropdownElem">
          <li className='dropdownElem_li'>
            <Link to={"/edit-daily-studies"} onClick={sendItemData}>
              {props.title}
            </Link>
          </li>
          <li>
            לִמְחוֹק
          </li>
        </ul>
        {
          numberOfItems == 2 &&
          <ul className="dropdown-menu dropdownElem1">
            <li className='dropdownElem_li'>
              <Button route={"/category-form"} ParentClass={"p-0"} linkClass={"text-dark dropdownListBtn"} title={props.title1} />
            </li>
            <li>
              <Button route={"/category-form"} ParentClass={"p-0"} linkClass={"text-dark dropdownListBtn2"} title={props.title2} />
            </li>
          </ul>
        }

        {
          numberOfItems == 3 &&
          <ul className="dropdown-menu dropdownElem2">
            <li className='dropdownElem_li'>
              <Button route={"/category-form"} ParentClass={"p-0"} linkClass={"text-dark dropdownListBtn"} title={props.title1} />
            </li>
            <li className='dropdownElem_li'>
              <Button route={"/category-form"} ParentClass={"p-0"} linkClass={"text-dark dropdownListBtn3"} title={props.title3} />
            </li>
            <li>
              <Button route={"/category-form"} ParentClass={"p-0"} linkClass={"text-dark dropdownListBtn2"} title={props.title2} />
            </li>
          </ul>
        }
      </div>
    </div>
  );
}
