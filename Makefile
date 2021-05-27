bump-%:
	OLD_VERSION=$$(git tag | sort -r --version-sort | head -n1) && \
	SEMVER_NEW_TAG=$$(bash ./semver.sh bump $(*) $${OLD_VERSION}) && \
	SEMVER_NEW_TAG="v$${SEMVER_NEW_TAG}" && \
	echo "new version: $${SEMVER_NEW_TAG}" && \
	cd lib && npm version $${SEMVER_NEW_TAG} && \
	git add . && \
	git commit -am "[$(*)] Bump version to $${SEMVER_NEW_TAG}" && \
	git tag $${SEMVER_NEW_TAG}

all: build bump-patch publish

clean:
	rm -f lib/index.d.ts lib/index.js lib/export.flow.js
build: clean
	cd lib && npm install && npm run prepublishOnly
publish:
	cd lib && npm publish
