Infos about setting up a Raspberry in Kiosk Mode

https://reelyactive.github.io/diy/pi-kiosk/

#!/bin/sh
xset -dpms # disable DPMS (Energy Star) features.
xset s off # disable screen saver
xset s noblank # don't blank the video device
matchbox-window-manager -use_titlebar no &
unclutter & # hide X mouse cursor unless mouse activated
chromium-browser --display=:0 --kiosk --incognito --window-position=0,0 --enable-features=OverlayScrollbar <http://172.16.8.117:3000>

<https://linuxhint.com/rotate-screen-in-raspberry-pi/>

<https://www.alessandroscola.com/en/computers/build-a-kiosk-with-raspberry>

<https://www.youtube.com/watch?v=CvKypnG3O88>

# Create a shell script

sudo nano settouchscreen.sh

xrandr --output HDMI-1 --rotate right
xinput set-prop '10' 'Coordinate Transformation Matrix' 0 1 0 -1 0 1 0 0 1

xrandr --output HDMI-1 --rotate left
xinput set-prop '10' 'Coordinate Transformation Matrix’ 0 -1 1 1 0 0 0 0 1
sudo chmod +x settouchscreen.sh

# Open autostart File

sudo nano /etc/xdg/lxsession/LXDE-pi/autostart

@/home/dschunge/settouchscreen.sh

@chromium-browser --display=:0 --kiosk --incognito --window-position=0,0 --enable-features=OverlayScrollbar http://172.16.8.117:3000
