export default class FileUpload {

    public fileName: string;
    public fileExtension: string;
    public fileSize: Number;
    public identity: Number;
    public fileSliceLength: Number;

    public constructor(file: File) {
        if (file === null) {
            throw new Error("file can't be null.");
        }

        this.fileSize = file.size;
        this.fileExtension = file.name.match(/\.([^\.]+)$/)![1];
        this.fileName = file.name.replace(/(.*\/)*([^.]+).*/ig, "$2");
        this.identity = new Date().getUTCMilliseconds();
        console.log(this.identity);
    }
}