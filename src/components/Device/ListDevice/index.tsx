import * as React from 'react';
import "./style.scss";
import { DropDown,SearchInput ,AddButton,TableData  } from '../../../components';
import PaginatedItems from 'react-paginate';
export interface IListDeviceProps {
}

export function ListDevice (props: IListDeviceProps) {
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
      const connectDropdown=[
        { label:"Tất cả",
          value:"all"
        },
        { label:"Kết nối",
          value:"connect"
        },
        { label:"Mất kết nối",
          value:"disconnect"
        }
      ]
  return (
    <div className='devicelist'>
          <div className='devicelist__tool'>
            <DropDown width='300px' title={"Trạng thái hoạt động"} listMenu={statusDropdown} />
            <DropDown width='300px' title={"Trạng thái kết nối"} listMenu={connectDropdown} />
            <SearchInput width='300px' left='164px' title={"Từ khóa"}/>
          </div>
          <div className='devicelist__content'>
            <div className='devicelist__content--table'>
              <TableData/>
            </div>
            <div className='devicelist__content--button'>
              <AddButton href='/home/device/add' title={"Thêm thiết bị"} height='94px' width='80px' icon="add"/>
            </div>
          </div>
          <div className='devicelist__footer'>
            <PaginatedItems pageCount={10} className="devicelist__footer--pagination" previousLabel={"<"}  nextLabel={">"}/>
          </div>
    </div>
  );
}
