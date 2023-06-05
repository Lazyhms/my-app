import './App.css';
import axios from 'axios';
import FileUpload from './FileUpload';
import { render } from 'react-dom';
import React from 'react';

export default class App extends React.Component {


    //   const instance = axios.create();
    //   instance.interceptors.request.use((request) => {
    //     console.log(request);

    //     return new Promise(async (resolve) => {
    //       var res = await uploadFile();
    //       console.log(res);

    //       for (const key in res) {
    //         if (Object.hasOwnProperty.call(res, key)) {
    //           const element = res[key];
    //           request.data.append(key, element);
    //         }
    //       }
    //       resolve(request);
    //     })
    //   });

    //   axios.defaults.baseURL = "http://localhost:5039";

    //     let fileUpload;

    // function fileChange(e: any) {
    //     const [targetFile] = e.target.files;
    //     fileUpload = new FileUpload(targetFile);
    // }

    //   async function upload() {
    //     await instance({
    //       url: "http://localhost:5039/api/ProgramFile",
    //       method: 'POST',
    //       data: new FormData(),
    //       headers: {
    //         "access_token": "2ff2ecf0-c089-490a-a278-fdc620443181",
    //         'Content-Type': 'application/x-www-form-urlencoded'
    //       }
    //     }).then((e) => {
    //       console.log(e);
    //     });
    //   }


    //   async function uploadFile() {

    //     // var obj = {};

    //     // var file_part = parseInt(((file.size) / sliceSize)) + 1;

    //     // identity = `${fileName}_${uuidv4().replace(/-/g, '')}`;

    //     // let start = 0, end = 0;
    //     // for (var index = 1; index <= file_part; index++) {
    //     //   end = start + sliceSize;
    //     //   if (end > file.size) {
    //     //     end = file.size;
    //     //   }

    //     //   var form = new FormData();
    //     //   form.append("File", file.slice(start, end, file.type), `${fileName}_part${index}.${fileExtension}`);

    //     //   start = end;

    //     //   AxiosPool.create(axios({
    //     //     url: `/api/File/Upload/${identity}`,
    //     //     method: 'POST',
    //     //     headers: {
    //     //       "access_token": "2ff2ecf0-c089-490a-a278-fdc620443181"
    //     //     },
    //     //     cache: false,
    //     //     processData: false,
    //     //     contentType: false,
    //     //     data: form,
    //     //   }));
    //     // }

    //     // AxiosPool.run(async (e) => {
    //     //   var res = e.every(r => r.status === 204);
    //     //   if (res) {
    //     //     await axios({
    //     //       url: `/api/File/Merger/${identity}`,
    //     //       method: 'POST',
    //     //       headers: {
    //     //         "access_token": "2ff2ecf0-c089-490a-a278-fdc620443181"
    //     //       },
    //     //       cache: false,
    //     //       processData: false,
    //     //       contentType: false,
    //     //       data: {
    //     //         FileName: `${fileName}.${fileExtension}`
    //     //       },
    //     //     }).then(e => {
    //     //       obj = e.data;
    //     //     });
    //     //   }
    //     // });
    //     // return obj;
    //   }

    //   var source = axios.CancelToken.source();

    //   async function Download() {
    //     axios({
    //       url: '/api/file/download?file=bin_0c19ad9ce9b34e278ed2b887d679155c.zip',
    //       responseType: 'blob',
    //       cancelToken: source.token
    //     }).then(e => {
    //       console.log(e);
    //     }).catch(e => {
    //       if (axios.isCancel(e)) {
    //         console.log('Request canceled', e.message);
    //       } else {
    //         // 处理错误
    //       }
    //     });
    //   }
    render() {
        function fileChange(e: React.ChangeEvent<HTMLInputElement>): void {
            throw new Error('Function not implemented.');
        }

        return (
            <div className="App">
                <header className="App-header">
                    <input type="file" id='file' onChange={(e) => fileChange(e)}></input>

                    <button onClick={() => { }}>提交</button>

                    <button onClick={() => { }}>下载</button>

                    <button onClick={() => { }}>暂停</button>

                    <button onClick={() => { }}>开始</button>
                </header>
            </div >
        );
    }
}