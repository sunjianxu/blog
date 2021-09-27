(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{456:function(s,a,t){"use strict";t.r(a);var e=t(17),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"git"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git"}},[s._v("#")]),s._v(" Git")]),s._v(" "),t("h2",{attrs:{id:"设置用户签名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置用户签名"}},[s._v("#")]),s._v(" 设置用户签名")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.name leo\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.email leo@126.com\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"初始化本地库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#初始化本地库"}},[s._v("#")]),s._v(" 初始化本地库")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"查看本地库状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看本地库状态"}},[s._v("#")]),s._v(" 查看本地库状态")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" status\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"添加文件到暂存区"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加文件到暂存区"}},[s._v("#")]),s._v(" 添加文件到暂存区")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" 文件名\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"删除暂存区中的文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除暂存区中的文件"}},[s._v("#")]),s._v(" 删除暂存区中的文件")]),s._v(" "),t("h3",{attrs:{id:"普通删除"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#普通删除"}},[s._v("#")]),s._v(" 普通删除")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" --cached 文件名\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"递归删除"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#递归删除"}},[s._v("#")]),s._v(" 递归删除")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -r --cached 文件名\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"递归暴力删除"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#递归暴力删除"}},[s._v("#")]),s._v(" 递归暴力删除")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -r -f --cached 文件名\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"应用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[s._v("#")]),s._v(" 应用场景")]),s._v(" "),t("ul",[t("li",[s._v("删除已被追踪的文件(已被追踪的文件，后续想要添加到.gitignore中的场景)")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -r -f --cached "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"update .gitignore"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"提交本地库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#提交本地库"}},[s._v("#")]),s._v(" 提交本地库")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"提交的信息"')]),s._v(" 文件名\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"查看版本信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看版本信息"}},[s._v("#")]),s._v(" 查看版本信息")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reflog\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"查看版本详细信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看版本详细信息"}},[s._v("#")]),s._v(" 查看版本详细信息")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"版本穿梭"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#版本穿梭"}},[s._v("#")]),s._v(" 版本穿梭")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --hard "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"版本号"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"分支创建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分支创建"}},[s._v("#")]),s._v(" 分支创建")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch 分支名\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"查看本地分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看本地分支"}},[s._v("#")]),s._v(" 查看本地分支")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -v\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"查看本地和远程分支列表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看本地和远程分支列表"}},[s._v("#")]),s._v(" 查看本地和远程分支列表")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -a\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"切换分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#切换分支"}},[s._v("#")]),s._v(" 切换分支")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout 分支名\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"删除本地分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除本地分支"}},[s._v("#")]),s._v(" 删除本地分支")]),s._v(" "),t("div",{staticClass:"language-markdown line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-markdown"}},[t("code",[t("span",{pre:!0,attrs:{class:"token list punctuation"}},[s._v("1.")]),s._v(" 正常删除\n   git branch -d 分支名称\n"),t("span",{pre:!0,attrs:{class:"token list punctuation"}},[s._v("2.")]),s._v(" 强制删除\n   git branch -D 分支名称\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"删除远程分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除远程分支"}},[s._v("#")]),s._v(" 删除远程分支")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push 别名 --delete 分支名\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"分支创建并切换"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分支创建并切换"}},[s._v("#")]),s._v(" 分支创建并切换")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout -b 新建的分支名称\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"合并分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#合并分支"}},[s._v("#")]),s._v(" 合并分支")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge 合并的分支名\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"解决合并冲突"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决合并冲突"}},[s._v("#")]),s._v(" 解决合并冲突")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("、git merge 分支名\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("、打开有冲突的文件\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("、手动决定保留哪些代码\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("、去除head和 《《《 和 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 和 》》》》 等特殊符号\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("、git "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" 冲突的文件名\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("、git commit -m "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"提交信息"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"团队协作-团队内协作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#团队协作-团队内协作"}},[s._v("#")]),s._v(" 团队协作（团队内协作）")]),s._v(" "),t("p",[t("img",{attrs:{src:"C:%5CUsers%5CAdministrator%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20210902205503473.png",alt:"image-20210902205503473"}})]),s._v(" "),t("h2",{attrs:{id:"团队协作-跨团队协作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#团队协作-跨团队协作"}},[s._v("#")]),s._v(" 团队协作（跨团队协作）")]),s._v(" "),t("p",[t("img",{attrs:{src:"C:%5CUsers%5CAdministrator%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20210903094604029.png",alt:"image-20210903094604029"}})]),s._v(" "),t("h2",{attrs:{id:"查看当前所有远程地址别名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看当前所有远程地址别名"}},[s._v("#")]),s._v(" 查看当前所有远程地址别名")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote -v\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"远程仓库起别名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#远程仓库起别名"}},[s._v("#")]),s._v(" 远程仓库起别名")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" 别名 远程库地址\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"推送本地库到远程库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#推送本地库到远程库"}},[s._v("#")]),s._v(" 推送本地库到远程库")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push 别名 分支名\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"拉取远程库到本地库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#拉取远程库到本地库"}},[s._v("#")]),s._v(" 拉取远程库到本地库")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull 别名 分支名\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"克隆远程库到本地《master》"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#克隆远程库到本地《master》"}},[s._v("#")]),s._v(" 克隆远程库到本地《master》")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone 远程库地址\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"克隆远程库到本地《按分支-tag》"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#克隆远程库到本地《按分支-tag》"}},[s._v("#")]),s._v(" 克隆远程库到本地《按分支|Tag》")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone -b 远程库"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("分支名"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("Tag"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" 远程库地址\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"ssh-免密登录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ssh-免密登录"}},[s._v("#")]),s._v(" SSH 免密登录")]),s._v(" "),t("div",{staticClass:"language-markdown line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-markdown"}},[t("code",[t("span",{pre:!0,attrs:{class:"token list punctuation"}},[s._v("1.")]),s._v(' 运行命令生成.ssh 密钥目录\n   ssh-keygen -t rsa -C "描述信息，一般写邮箱地址即可"\n'),t("span",{pre:!0,attrs:{class:"token list punctuation"}},[s._v("2.")]),s._v(" 查看公钥并且复制\n   C:\\Users\\Administrator\\.ssh\\id_rsa.pub\n"),t("span",{pre:!0,attrs:{class:"token list punctuation"}},[s._v("3.")]),s._v(" github 设置里添加公钥\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h2",{attrs:{id:"查看-tag-列表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看-tag-列表"}},[s._v("#")]),s._v(" 查看 Tag 列表")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"创建-tag"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建-tag"}},[s._v("#")]),s._v(" 创建 Tag")]),s._v(" "),t("div",{staticClass:"language-markdown line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-markdown"}},[t("code",[t("span",{pre:!0,attrs:{class:"token list punctuation"}},[s._v("1.")]),s._v(' 普通创建 Tag\n   git tag -a tag 名称 -m "备注信息"\n'),t("span",{pre:!0,attrs:{class:"token list punctuation"}},[s._v("2.")]),s._v(' 指定版本创建 Tag\n   git tag -a tag 名称 提交的版本号 -m "备注信息"\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"切换-tag"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#切换-tag"}},[s._v("#")]),s._v(" 切换 Tag")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout tag名称\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"推送-tag"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#推送-tag"}},[s._v("#")]),s._v(" 推送 Tag")]),s._v(" "),t("div",{staticClass:"language-markdown line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-markdown"}},[t("code",[t("span",{pre:!0,attrs:{class:"token list punctuation"}},[s._v("1.")]),s._v(" 推送指定 tag\n   git push 别名 Tag 名称\n"),t("span",{pre:!0,attrs:{class:"token list punctuation"}},[s._v("2.")]),s._v(" 推送所有 tag\n   git push origin --tags\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"删除本地-tag"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除本地-tag"}},[s._v("#")]),s._v(" 删除本地 Tag")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag -d Tag名称\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"删除远程-tag"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除远程-tag"}},[s._v("#")]),s._v(" 删除远程 Tag")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push 别名 :refs/tags/tag名称\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);