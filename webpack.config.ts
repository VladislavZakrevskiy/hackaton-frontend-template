import webpack from 'webpack'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import {
    type BuildEnv,
    type BuildMode,
    type BuildPaths,
} from './config/build/types/config'
import path from 'path'

export default (env: BuildEnv): webpack.Configuration => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(
            __dirname,
            'public',
            'index.html'
        ),
        src: path.resolve(__dirname, 'src'),
        locales: path.resolve(__dirname, 'public', 'locales'),
        buildLocales: path.resolve(__dirname, 'src', 'build', 'locales'),
    }

    const mode: BuildMode = env?.mode || 'development'
    const isDev = mode === 'development'
    const PORT = env?.port || 3000
    const apiUrl = env?.apiUrl || 'http://localhost:8000'

    const config: webpack.Configuration =
        buildWebpackConfig({
            mode,
            paths,
            isDev,
            PORT,
            apiUrl,
            project: "frontend"
        })

    return config
}
