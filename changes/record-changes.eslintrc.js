const lodash = require("lodash");
require("../lib/util/link");
// eslint-disable-next-line node/no-extraneous-require
require("eslint-plugin-evelyn/lib/util/save-config")(
	"./changes/record-changes.json",
	data => lodash.cloneDeepWith(
		JSON.parse(JSON.stringify(data)),
		(value, key) => ["filePath", "basePath", "importerPath", "requireStack", "message"].includes(key) ? "CLEANED" : undefined
	),
);

// eslint-disable-next-line node/no-extraneous-require
module.exports = require("eslint-plugin-evelyn/all-configs.eslintrc.js");
