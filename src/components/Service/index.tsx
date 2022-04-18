import * as React from 'react';
import "./style.scss";
import { useLocation} from 'react-router-dom';
import { DropDown,SearchInput,AddButton  } from '../index';
import PaginatedItems from 'react-paginate';

export interface IserviceProps {
}

export function Service (props: IserviceProps) {
  const location = useLocation();
  const titleList = [
    { path:"/home/service",
      title:"Danh sách dịch vụ"
    },
    { path:"/home/service/add",
      title:"Quản lý dịch vụ"
    },
    { path:"/home/service/detail",
      title:"Quản lý dịch vụ"
    },
    { path:"/home/service/update",
      title:"Quản lý dịch vụ"
    },
  ]
  const index = titleList.findIndex(e => e.path === location.pathname)
  console.log(location.pathname)

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
    <div className='service'>
      <div className='service__container'>
        <div className='service__header'>
          <span className='service__header--title'>{titleList[index].title}</span>
        </div>
        <div className='service__tool'>
          <DropDown width='300px' title={"Trạng thái hoạt động"} listMenu={statusDropdown} />
          <SearchInput width='300px' left='94px' title={"Từ khóa"}/>
        </div>
        <div className='service__content'>
          <div className='service__content--table'>
          
          </div>
          <div className='service__content--button'>
            <AddButton href='/home/service/add' title={"Thêm dịch vụ"} height='94px' width='80px' icon="add"/>
          </div>
        </div>
        <div className='service__footer'>
          <PaginatedItems pageCount={10} className="device__footer--pagination" previousLabel={"<"}  nextLabel={">"}/>
        </div>
      </div>
    </div>
  );
}
