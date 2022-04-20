import * as React from 'react';
import "./style.scss";
import { DropDown,SearchInput,AddButton, DatePickerTool } from '../../index';
import PaginatedItems from 'react-paginate';

export interface IListserviceProps {
}

export function Listservice (props: IListserviceProps) {
    const statusDropdown=[
        { label:"Tất cả",
          value:"all"
        },
        { label:"Hoạt động",
          value:"active"
        },
        { label:"Ngưng hoạt động",
          value:"deactive"
        }
      ]
  return (
    <div className='listservice'>
         <div className='listservice__tool'>
          <DropDown width='300px' title={"Trạng thái hoạt động"} listMenu={statusDropdown} />
          <DatePickerTool width='150px' padding='12px'/>
          <SearchInput width='300px' left='168px' title={"Từ khóa"}/>
        </div>
        <div className='listservice__content'>
          <div className='listservice__content--table'>
          
          </div>
          <div className='listservice__content--button'>
            <AddButton href='/home/service/add' title={"Thêm dịch vụ"} height='94px' width='80px' icon="add"/>
          </div>
        </div>
        <div className='listservice__footer'>
          <PaginatedItems pageCount={10} className="listservice__footer--pagination" previousLabel={"<"}  nextLabel={">"}/>
        </div>
    </div>
  );
}
