### 8.2.1 下载安装Thonny IDE(重要)

Thonny是一个免费、开源的软件平台，体积小，界面简单，操作简单，功能丰富，是一个适合初学者的Python IDE。在本教程中，我们使用这个IDE在整个过程中开发ESP32。Thonny支持多种操作系统，包括Windows, Mac OS, Linux。

#### 8.2.1.1 下载安装Thonny

Thonny是一个免费、开源的软件平台，体积小，界面简单，操作简单，功能丰富，是一个适合初学者的Python IDE。在本教程中，我们使用 Thonny 这个IDE在整个实验课程过程中开发ESP32。Thonny支持多种操作系统，包括Windows, Mac OS,  Linux。

（1）软件下载和开源代码库分享

- Thonny软件官网：[https://thonny.org](https://thonny.org) 

  请根据您的操作系统选择相应的版本下载。

  也可以使用我们提供的安装包：

- Windows系统：

  链接: [https://pan.baidu.com/s/1LNCP-fBc-P_SrdiMuaeijg?pwd=te7y](https://pan.baidu.com/s/1LNCP-fBc-P_SrdiMuaeijg?pwd=te7y) 提取码: te7y

- Mac系统：

  链接: [https://pan.baidu.com/s/1Qd7ShCmdWUlR7KQJ7kyzCA?pwd=ee41](https://pan.baidu.com/s/1Qd7ShCmdWUlR7KQJ7kyzCA?pwd=ee41) 提取码: ee41

 **<span style="color: rgb(255, 0, 65);">注意：本教程使用的是 4.1.7 版本，请保持一致，以免出现代码不兼容情况。</span>**

![img](./media/1101.png)



（2）鼠标左键双击![1103](media/1103.png)，选择 **Install for all users** 。你也可以选择 Install for me only 进行操作。

![img](./media/1104.png)

（3）如果你不熟系电脑软件的安装，可以一直单击 **Next** 直至安装完成。

![img](./media/1105.png)

![img](./media/1106.png)

（4）Thonny软件的安装路径。默认此安装路径继续下一步，单击 **Next** 。如果您想选择一个不同的文件夹，请单击 <strong>Browse...</strong> 进行修改。

![img](./media/1107.png)

（5）程序将在下面的开始菜单文件夹中创建程序的快捷方式。默认此文件夹继续下一步，单击 **Next** 。如果您想选择一个不同的文件夹，请单击 **Browse...** 。

![img](./media/1108.png)

（6）选中 **Creak desktop icon** ，在桌面生成快捷方式。

![img](./media/1109.png)

（7）单击 **Install** 安装软件。等待安装成功。

![img](./media/1110.png)

（8）安装完成，单击 **Finish** 结束安装。

![img](./media/1111.png)

---

### 8.2.2 Thonny软件基本配置与介绍

#### 8.2.2.1 Thonny软件基本配置

（1）双击桌面的Thonny软件图标![img](./media/2101.png)，出现语言选择和初始设置界面。

![img](./media/2102.png)

Language 选择 **简体中文** 。然后单击 **Let's go!** 结束设置。

![img](./media/1203.png)

![img](./media/1204.png)

（2）单击 **视图** ，勾选 **Shell** 和 **文件** 

![img](./media/1205.png)

---

#### 8.2.2.2 Thonny软件的介绍

（1）工具栏介绍

![img](./media/1301.png)

|                      按钮                       |       功能        |
| :---------------------------------------------: | :---------------: |
| ![img](./media/1302.png)  |       新建        |
| ![img](./media/1303.png)  |      打开...      |
| ![img](./media/1304.png)  |       保存        |
| ![img](./media/1305.png)  |   运行当前脚本    |
| ![img](./media/1306.png)  |   调试当前脚本    |
| ![img](./media/1307.png) |       步过        |
| ![img](./media/1308.png)  |       步进        |
| ![img](./media/1309.png)  |       步出        |
| ![img](./media/1310.png)  |     恢复执行      |
| ![img](./media/1311.png)  | 停止/重启后端进程 |

（2）界面介绍

![img](./media/1312.png)

---

### 8.2.3 烧录固件(<span style="color: rgb(255, 76, 65);">重要</span>)

要在ESP32主板上运行Python程序，我们需要先将固件烧入到ESP32主板。

#### 8.2.3.1 下载Micropython固件

本教程中使用的固件是：**esp32-20210902-v1.17.bin** 。我们的资料中也提供了此版本的固件，路径如下图。(<span style="color: rgb(255, 76, 65);">提醒：这里是以 **MicroPython资料\MicroPython_库文件** 文件夹转移到D盘为例，你可以将下载的**MicroPython资料** 文件夹复制粘贴到D盘。</span>)

![img](./media/4102.png)

#### 8.2.3.2 烧录Micropython固件

（1）将ESP32主板通过USB线连接到计算机。

![img](./media/4103.png)

（2）打开Thonny，点击 **运行** ，选择 **配置解释器**。

![4105](media/4105.png)

在解释器页面，按下图所示选择（COM号以你电脑的端口为准），**然后单击安装或更新MicroPython（esptool）**。

![4106](media/4106.png)

按下图所示选择，打开固件存放的路径，选中 **esp32-20210902-v1.17.bin** 。

![4107](media/4107.png)

单击 **安装**，等待安装完成提示。

![4108](media/4108.png)

![4109](media/4109.png)

（3）安装完成，单击 **关闭** 。

![4110](media/4110.png)

单击 **确认** 。

![4111](media/4111.png)

（5）点击![1311](./media/1311.png)**停止/重启后端进程**按钮。

![4112](media/4112.png)

现在，一切准备工作都已就绪。

---

### 8.2.4 添加 MicroPython 库(<span style="color: rgb(255, 76, 65);">重要</span>)

在某些项目中，您将需要额外的库。所以这里我们先把这些库上传到 ESP32 主控板上，然后我们可以直接运行代码。

1\. 使用 Micro USB 数据线将 ESP32 主控板连接到您的计算机。

![Img](./media/4103.png)

2\. 打开 Thonny IDE，并在顶部的菜单栏中，单击 “ **视图** -> **文件** ”。

![Img](./media/5304.png)

![Img](./media/5305.png)

3\. 将路径切换到之前下载的 **MicroPython资料** 文件夹，然后转到 **MicroPython_库文件** 文件夹。
(<span style="color: rgb(255, 76, 65);">提醒：这里是以 **MicroPython资料\MicroPython_库文件** 文件夹转移到D盘为例，你可以将下载的**MicroPython资料** 文件夹复制粘贴到D盘。</span>)

![Img](./media/5306.png)

4\. 选中 <span style="color: rgb(255, 76, 65);">MicroPython_库文件</span> 文件夹中的 **i2c_lcd\.py** 文件，鼠标右键单击 **i2c_lcd\.py** 文件，然后选择 “**<span style="color: rgb(255, 76, 65);">上传到/</span>**” ，这样，**i2c_lcd\.py** 文件被上传到 “**MicroPython 设备**” 驱动器中。

![Img](./media/5307.png)

5\. 您将看到您刚刚上传到 “**MicroPython 设备**” 驱动器中的文件。

![Img](./media/5308.png)

6\. 用相同的方法，将剩余的库文件都上传到 “**MicroPython 设备**” 驱动器中。

![Img](./media/5310.png)

![Img](./media/5311.png)

![Img](./media/5312.png)

7\. 这样，您将看到您刚刚上传到“**MicroPython 设备**”驱动器中的所有文件。

![Img](./media/5309.png)

**<span style="color: rgb(255, 76, 65);">特别提醒：</span>** 如果添加某些库文件后，发现不再需要它们，也是可以删除它们的，这里是以 **i2c_lcd\.py** 库文件为例的。一般来说，在对应的套件项目教程中，添加好的库文件，是不需要把它们删除的。

![Img](./media/5313.png)

![Img](./media/5314.png)