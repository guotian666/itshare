var posts=["2023/04/20/技术文章/Docker 安装 Nexus3 并搭建 Docker 私有镜像仓库/","2023/04/25/技术文章/Docker 部署的微服务注册到 Nacos 的 IP 为私网无法访问/","2022/09/16/技术文章/Git Flow 工作流/","2021/11/18/技术文章/GitLab 安装与使用/","2022/10/11/技术文章/JDK8 新特性 /","2022/08/17/技术文章/Lombok 消除冗余代码/","2022/06/01/技术文章/Markdown 基本语法/","2023/04/11/技术文章/MongoDB数据库/","2023/03/04/技术文章/Redis 集群部署案例设计/","2023/08/11/技术文章/Redis高可用全景一览/","2022/04/26/技术文章/Tomcat 配置 HTTPS 协议访问/","2022/07/26/技术文章/git分支管理规范/","2022/07/18/技术文章/git常用指令/","2022/05/20/技术文章/nginx从入门到实战/","2022/05/20/技术文章/nginx实现灰度上线系统/","2023/06/25/技术文章/nvm安装配置/","2023/07/12/技术文章/tomcat获取基本路径/","2022/01/11/技术文章/分库分表理论知识/","2023/03/09/技术文章/深入理解 RESTful 风格/","2022/11/11/技术文章/错误码及全局异常处理/","2023/07/28/技术文章/零拷贝策略/","2022/04/11/问题处理/Redis 缓存穿透、缓存击穿、缓存雪崩问题/","2022/07/01/问题处理/分析解析项目上内存泄漏、频繁GC、cpu飙升问题/","2022/03/16/问题处理/Dom4j 如何新增 standalone/","2022/05/02/问题处理/Java 操作 Excel 之 POI 与 EasyExcel/","2023/05/01/技术文章/Doker基础入门/","2022/01/02/技术文章/ElasticSearch 的概述和使用/","2022/04/11/技术文章/Linux 系统基础/","2022/07/02/技术文章/MapStruct 对象转换/","2021/08/23/技术文章/SpringBoot核心技术/","2021/09/10/技术文章/java常见面试题/","2022/09/27/技术文章/持续集成工具之 Jenkins/","2023/03/05/技术文章/JUC 并发编程/","2022/09/12/技术文章/常用编程环境与开发工具安装手册/","2023/05/15/技术文章/Docker高级篇/","2021/07/11/技术文章/Redis 数据库/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};