# TypeScript Step Learning

结构：
- `steps/`：原理讲解
- `practice/`：对应练习（`.ts` / `.d.ts`）
- `progress.md`：学习打勾
- `tsconfig.json`：本学习包编译配置

建议执行：
1. `npx tsc -p ts-step-learning --noEmit`
2. 逐步查看 `practice/*`

学习路线：

## 阶段 A：0-1 入门（Step 01-06）
1. 类型系统观念
2. 联合类型与收窄
3. interface vs type
4. 泛型
5. keyof 与映射类型
6. 条件类型与 infer

目标：
- 建立类型系统思维，能独立写出基础泛型与常见工具类型。

## 阶段 B：进阶（Step 07-14）
7. unknown / any / never
8. 声明文件
9. tsconfig 严格模式
10. 渐进迁移
11. 类型体操：递归与分发
12. API 契约与运行时校验
13. React 场景类型设计
14. 类型测试与回归保障

目标：
- 在工程场景中落地类型设计、运行时边界校验与类型回归保障。
