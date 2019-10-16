VERSION := $(shell git tag | sort -r --version-sort | head -n1)

bump-%:
	SEMVER_NEW_TAG=$$(bash ./semver.sh bump $(*) $(VERSION)) &&\
	SEMVER_NEW_TAG="v$${SEMVER_NEW_TAG}" && \
	echo "new version: $${SEMVER_NEW_TAG}" && \
	git tag $${SEMVER_NEW_TAG} && \
	cd js && npm version $${SEMVER_NEW_TAG}


build: build-go build-js
publish: publish-go publish-js

clean-js:
	rm -f js/index.d.ts js/index.js
build-js: clean-js
	cd js && npm && npm prepublishOnly
publish-js:
	cd js && npm publish


clean-go:
	rm -rf go/api.pb.go
build-go: clean-go
	protoc api.proto --go_out=plugin=grpc:./go
publish-go:
	git subtree split --prefix=go -b go-release && \
	git push git@github.com:replit/protocol-go.git go-release:master && \
	git push git@github.com:replit/protocol-go.git HEAD:refs/tags/$(VERSION) && \
	git branch -D go-release