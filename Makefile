PREFIX = .
SRC_DIR = ${PREFIX}/src
DOCS_DIR = ${PREFIX}/docs
SPECS_DIR = ${PREFIX}/specs
DIST_DIR = ${PREFIX}/dist

BASE_FILES = ${SRC_DIR}/object.js\
	${SRC_DIR}/type.js\
	${SRC_DIR}/enumerable.js\
	${SRC_DIR}/array.js\
	${SRC_DIR}/hash.js\
	${SRC_DIR}/string.js

MODULES = ${SRC_DIR}/intro.js\
	${BASE_FILES}\
	${SRC_DIR}/outro.js

JQ_LANG = ${DIST_DIR}/jquery.lang.js

JQ_LANG_VER = `cat version.txt`
VER = sed s/@VERSION/${JQ_LANG_VER}/

DATE=`git log -1 --no-color | grep Date: | sed 's/.*: *//g'`
COMMIT=`git log -1 --no-color | grep ^commit | sed 's/commit *//g'`

all: jquery_lang
	@@echo "jQuery.lang build complete."

${DIST_DIR}:
	@@mkdir -p ${DIST_DIR}

jquery_lang: ${DIST_DIR} ${JQ_LANG}

${JQ_LANG}: ${MODULES}
	@@echo "Building" ${JQ_LANG}

	@@mkdir -p ${DIST_DIR}
	@@cat ${MODULES} | \
		sed 's/^Date:./&'"${DATE}"'/' | \
		sed 's/^Commit:./&'"${REV}"'/' | \
		${VER} > ${JQ_LANG};

	@@echo ${JQ_LANG} "Built"
	@@echo

clean:
	@@echo "Removing Distribution directory:" ${DIST_DIR}
	@@rm -rf ${DIST_DIR}
