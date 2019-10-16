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
	git branch -D go-release
