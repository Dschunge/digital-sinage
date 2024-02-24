Infos about setting up a Raspberry in Kiosk Mode

https://reelyactive.github.io/diy/pi-kiosk/

#!/bin/sh
xset -dpms # disable DPMS (Energy Star) features.
xset s off # disable screen saver
xset s noblank # don't blank the video device
matchbox-window-manager -use_titlebar no &
unclutter & # hide X mouse cursor unless mouse activated
chromium-browser --display=:0 --kiosk --incognito --window-position=0,0 --enable-features=OverlayScrollbar http://172.16.8.117:3000
