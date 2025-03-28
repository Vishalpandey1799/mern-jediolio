import dataUriParser from "datauri";

import path from "path"

const parser = new dataUriParser();

export const getDataUri = (file) =>{
    const extName = path.extname(file.originalname).toString();
    return parser.format(extName, file.buffer).content;
}
