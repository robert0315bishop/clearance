import global_env from "../configs/global_env";

const DFnewLogger = ((flag) => {
  if (flag !== true) {
    return () => {};
  }
  return console.log.bind(window.console);
})(global_env.isDebug);

export default DFnewLogger;
