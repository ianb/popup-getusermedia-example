# popup-getusermedia-example

A small extension to demonstrate that a popup can't use getUserMedia. OR MAYBE IT CAN?!?!?

## Using this

To get running:

```sh
npm install
npm start
```

will launch a new browser with the extension installed. Click the upside-down mic icon.

The status will show if it gets a media stream. Try opening the popup in a tab, using the link in the popup.

Various odd things may occur. I haven't figured out exactly how everything works.

## Results:

### Firefox Nightly, v70, build 2019-08-01

When you open the popup it will request audio, and never receive a response. It just stalls.

If you open the popup in a tab, it will request audio, and you can remember it.

If you have the tab open along with the popup, it will show the permission request as coming from the tab, even though it actually comes from the popup. Interacting with the permission will close the popup, but does give temporary access.

If you give permission to the tab and remember the permission, then the popup can get audio.

### Firefox Beta, v69

When you open the popup with about:blank in the main tab, it asks for permission! Accepting permission of course closes the popup, but works.

You can remember the permission, and it applies to the popup.

### Firefox Release, v68.0.1

Like v69, popup causes a permission prompt, but this time only the second time you open it (maybe that's true for v70 too?) Note this is true for any page, not just about:blank

Generally works the same.
