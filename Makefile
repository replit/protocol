# By default, just build. This prevents accidents.
all: build

bump-%:
	OLD_VERSION=$$(git tag | sort -r --version-sort | head -n1) && \
	SEMVER_NEW_TAG=$$(bash ./scripts/semver.sh bump $(*) $${OLD_VERSION}) && \
	SEMVER_NEW_TAG="v$${SEMVER_NEW_TAG}" && \
	echo "new version: $${SEMVER_NEW_TAG}" && \
	cd lib && npm version $${SEMVER_NEW_TAG} && \
	git add . && \
	git commit -am "[$(*)] Bump version to $${SEMVER_NEW_TAG}" && \
	git tag $${SEMVER_NEW_TAG}

.PHONY: clean
clean:
	rm -rf lib/index.d.ts lib/index.js lib/export.flow.js lib/iotester

.PHONY: build
build: clean
	cd lib && npm install && npm run prepublishOnly

.PHONY: publish
publish:
	$(MAKE) bump-patch
	cd lib && npm publish
