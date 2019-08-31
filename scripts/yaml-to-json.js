const yaml = require("js-yaml");
const fs = require("fs");
const path = require("path");
const chokidar = require("chokidar");

const src = "../src";

const genJobs = files => {
  console.log(files);
  files.forEach(fileExt => {
    try {
      const [file, _] = fileExt.split(".");
      const sr = path.join(__dirname, src, file + ".yml");
      const dst = path.join(__dirname, src, file + ".json");
      var doc = yaml.safeLoad(fs.readFileSync(sr, "utf8"));
      fs.writeFileSync(dst, JSON.stringify(doc, null, 2));
    } catch (e) {
      console.log(e);
    }
  });
};

const getYamls = src => {
  const files = fs.readdirSync(path.join(__dirname, src));
  const yamls = files
    .filter(file => file.match(/\.yml$/))
    .map(file => file.replace(".yaml", ""));
  return yamls;
};

const processYamls = src => {
  try {
    const yamls = getYamls(src);
    const yamlsPath = yamls.map(yaml => path.join(__dirname, src, yaml));
    const watcher = chokidar.watch(yamlsPath);
    watcher.on("change", pth => genJobs([path.basename(pth)]));
    watcher.on("ready", _ => genJobs(yamls));
  } catch (e) {
    console.error("Error! On converting yaml to json", e);
  }
};

if (require.main === module) processYamls(src);
