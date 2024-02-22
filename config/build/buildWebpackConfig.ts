import {buildOptions} from "./types/buildOptions";
import webpack from "webpack";
import path from "path";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import buildPlugins from "./buildPlugins";

export default function buildWebpackConfig(options: buildOptions):webpack.Configuration{

    const {paths,mode} = options

    return  {
        mode:mode,
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path:paths.build,
            clean:true
        },
        module: {
            rules: buildLoaders()
        },
        resolve: buildResolvers(),
        plugins: buildPlugins(options)
    }
}