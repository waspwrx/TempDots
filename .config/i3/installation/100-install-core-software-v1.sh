#!/bin/bash
set -e
##################################################################################################################
# Written to be used on 64 bits computers
# Author 	: 	Erik Dubois
# Website 	: 	http://www.erikdubois.be
##################################################################################################################
##################################################################################################################
#
#   DO NOT JUST RUN THIS. EXAMINE AND JUDGE. RUN AT YOUR OWN RISK.
#
##################################################################################################################

#software from 'normal' repositories
trizen -S --noconfirm --needed archey3 baobab bleachbit catfish clementine conky curl
trizen -S --noconfirm --needed darktable dconf-editor
trizen -S --noconfirm --needed dmidecode 
trizen -S --noconfirm --needed evince evolution filezilla firefox
trizen -S --noconfirm --needed galculator geary gimp git gksu glances gnome-disk-utility 
trizen -S --noconfirm --needed gnome-font-viewer gnome-screenshot gnome-system-monitor gnome-terminal gnome-tweak-tool 
trizen -S --noconfirm --needed gparted gpick grsync
trizen -S --noconfirm --needed hardinfo hddtemp hexchat htop 
trizen -S --noconfirm --needed inkscape inxi lm_sensors lsb-release meld mlocate mpv
trizen -S --noconfirm --needed nemo net-tools notify-osd numlockx openshot pinta plank polkit-gnome 
trizen -S --noconfirm --needed redshift ristretto sane screenfetch scrot shotwell 
trizen -S --noconfirm --needed simple-scan simplescreenrecorder smplayer sysstat 
trizen -S --noconfirm --needed terminator thunar transmission-cli transmission-gtk tumbler
trizen -S --noconfirm --needed variety vlc vnstat wget unclutter  


sudo systemctl enable vnstat
sudo systemctl start vnstat

###############################################################################################

# installation of zippers and unzippers
trizen -S --noconfirm --needed unace unrar zip unzip sharutils  uudeview  arj cabextract file-roller

###############################################################################################


echo "################################################################"
echo "###################    core software installed  ################"
echo "################################################################"

