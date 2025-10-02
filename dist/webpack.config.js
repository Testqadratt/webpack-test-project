import path from 'path';
import { buildWebpack } from './config/build/buildWebpack';
export default (function (env) {
    var _a, _b, _c;
    var paths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        output: path.resolve(__dirname, 'build'),
        src: path.resolve(__dirname, 'src'),
    };
    var config = buildWebpack({
        port: (_a = env.port) !== null && _a !== void 0 ? _a : 3000,
        mode: (_b = env.mode) !== null && _b !== void 0 ? _b : 'development',
        paths: paths,
        platform: (_c = env.platform) !== null && _c !== void 0 ? _c : 'desktop',
        analyzer: env.analyzer,
    });
    return config;
});
