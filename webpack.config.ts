import buildWebpackConfig from "./config/build/buildWebpackConfig";
import {buildPath} from "./config/build/types/buildOptions";
import path from "path";

const paths : buildPath = {
    entry:path.resolve(__dirname,'src','index.ts'),
    build:path.resolve(__dirname,'build'),
    html:path.resolve(__dirname,'public','index.html')
}

const webpackConfig = buildWebpackConfig({
    mode:'development',
    paths,

})
module.exports = webpackConfig