import * as React from 'react';
import "./style.scss";
import { useLocation} from 'react-router-dom';
import { DropDown } from '../index';
import { SearchInput } from '../SearchInput';
import { AddButton } from '../ButtonAdd';
import PaginatedItems from 'react-paginate';
import { DatePickerTool } from '../DatePicker';

export interface IProvideNumberProps {
}

export function ProvideNumber (props: IProvideNumberProps) {
  const location = useLocation();
  const titleList = [
    { path:"/home/providenumber",
      title:"Quản lý cấp số"
    },
    { path:"/home/providenumber/add",
      title:"Quản lý cấp số"
    },
    { path:"/home/providenumber/detail",
      title:"Quản lý cấp số"
    },
  ]
  const index = titleList.findIndex(e => e.path === location.pathname)
  console.log(location.pathname)

  const statusDropdown=[
    { label:"Tất cả",
      value:"all"
    },
    { label:"Đang chờ",
      value:"waiting"
    },
    { label:"Đang sử dụng",
      value:"using"
    },
    { label:"Bỏ qua",
      value:"skip"
    }
  ]
  const serviceDropdown=[
    { label:"Tất cả",
      value:"all"
    },
    { label:"Khám sản - Phụ khoa",
      value:"connect"
    },
    { label:"Khám răng hàm mặt",
      value:"disconnect"
    },
    { label:"Khám tai mũi họng",
      value:"disconnect"
    }
  ]
  const sourceDropdown=[
    { label:"Tất cả",
      value:"all"
    },
    { label:"Kiosk",
      value:"kiosk"
    },
    { label:"Hệ thống",
      value:"system"
    },
    
  ]
  return (
    <div className='providenumber'>
      <div className='providenumber__container'>
        <div className='providenumber__header'>
          <span className='providenumber__header--title'>{titleList[index].title}</span>
        </div>
        <div className='providenumber__tool'>
          <DropDown width='154px' title={"Tên dịch vụ"} listMenu={serviceDropdown} />
          <DropDown width='154px' title={"Tình trạng"} listMenu={statusDropdown} />
          <DropDown width='154px' title={"Nguồn cấp"} listMenu={sourceDropdown} />
          <DatePickerTool width='150px' padding='12px'/>
          <SearchInput width='240px' left='24px' title={"Từ khóa"}/>
        </div>
        <div className='providenumber__content'>
          <div className='providenumber__content--table'>
          
          </div>
          <div className='providenumber__content--button'>
            <AddButton href='/home/providenumber/add' title={"Cấp số mới"} height='94px' width='80px' icon="add"/>
          </div>
        </div>
        <div className='providenumber__footer'>
          <PaginatedItems pageCount={10} className="providenumber__footer--pagination" previousLabel={"<"}  nextLabel={">"}/>
        </div>
      </div>
    </div>
  );
}
