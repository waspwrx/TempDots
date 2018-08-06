set runtimepath+=~/.vim_runtime

source ~/.vim_runtime/vimrcs/basic.vim
source ~/.vim_runtime/vimrcs/filetypes.vim
source ~/.vim_runtime/vimrcs/plugins_config.vim
source ~/.vim_runtime/vimrcs/extended.vim

try
source ~/.vim_runtime/my_configs.vim
catch
endtry
set t_Co=256
colorscheme gruvbox
set number
set nohlsearch

let mapleader = ","
let g:mapleader = ","
let g:syntastic_mode_map = { 'mode': 'passive', 'active_filetypes': [],'passive_filetypes': [] }
nnoremap <leader>E :SyntasticCheck<CR> :SyntasticToggleMode<CR>
execute pathogen#infect()
"keybind to make latex files
nnoremap <leader>M :!make<CR>
