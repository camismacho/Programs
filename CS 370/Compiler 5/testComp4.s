	.data
x:	.word 0
y:	.word 0
	.section	.rodata
.LC0:
	.string	"hello world!\n"
.LC1:
	.string	"x=%d\n"
.LC2:
	.string	"if works!\n"
.LC3:
	.string	"else works!\n"
.LC4:
	.string	"if works!\n"
.LC5:
	.string	"else works!\n"
.LC6:
	.string	"goodbye"
.LC7:
	.string	"third arg"
.LC8:
	.string	"goodbye %s %d\n"
.LC9:
	.string	"second"
.LC10:
	.string	"Hello World!\n"
.LC11:
	.string	"loopy loop\n"
	.text
a:	.word 0
b:	.word 0
s:	.word 0
	.globl	func
	.type	func, @function
func:
	pushq	%rbp
	movq	%rsp, %rbp
	movq	$.LC0, %rdx
	movq	%rdx, %rdi
	movl	$0, %eax
	call	puts
	movq	$42, %rdx
	pushq	%rdx
	movq	$12, %rdx
	popq	%rcx
	addq	%rcx, %rdx
	movq	%rdx, x
	movq	%rdx, %rdi
	movq	$.LC1, %rdx
	movq	%rdx, %rdi
	movq	x, %rdx
	movq	%rdx, %rsi
	movl	$0, %eax
	call	printf
	movq	$20, %rdx
	pushq	%rdx
	movq	$10, %rdx
	popq	%rcx
	cmp	%rdx, %rcx
	jg	LL101
	movq	$.LC3, %rdx
	movq	%rdx, %rdi
	movl	$0, %eax
	call	puts
	jmp	LL102
LL101:
	movq	$.LC2, %rdx
	movq	%rdx, %rdi
	movl	$0, %eax
	call	puts
LL102:
	movq	$20, %rdx
	pushq	%rdx
	movq	$10, %rdx
	popq	%rcx
	cmp	%rdx, %rcx
	jl	LL103
	movq	$.LC5, %rdx
	movq	%rdx, %rdi
	movl	$0, %eax
	call	puts
	jmp	LL104
LL103:
	movq	$.LC4, %rdx
	movq	%rdx, %rdi
	movl	$0, %eax
	call	puts
LL104:
	popq	%rbp
	movl	$0, %eax
	ret
argc:	.word 0
argv:	.word 0
	.globl	main
	.type	main, @function
main:
	pushq	%rbp
	movq	%rsp, %rbp
	movq	$42, %rdx
	movq	%rdx, %rdi
	movq	$.LC6, %rdx
	movq	%rdx, %rsi
	movq	$.LC7, %rdx
	movq	%rdx, %rdx
	movl	$0, %eax
	call	func
	movq	$.LC8, %rdx
	movq	%rdx, %rdi
	movq	$.LC9, %rdx
	movq	%rdx, %rsi
	movq	$42, %rdx
	pushq	%rdx
	movq	$4, %rdx
	pushq	%rdx
	movq	x, %rdx
	pushq	%rdx
	movq	$2, %rdx
	popq	%rcx
	addq	%rcx, %rdx
	popq	%rcx
	addq	%rcx, %rdx
	popq	%rcx
	addq	%rcx, %rdx
	movq	%rdx, %rdx
	movl	$0, %eax
	call	printf
	movq	$.LC10, %rdx
	movq	%rdx, %rdi
	movl	$0, %eax
	call	puts
	movq	$0, %rdx
	movq	%rdx, x
	movq	%rdx, %rdi
	jmp	LL105
LL106:
	movq	$.LC11, %rdx
	movq	%rdx, %rdi
	movl	$0, %eax
	call	puts
	movq	x, %rdx
	pushq	%rdx
	movq	$1, %rdx
	popq	%rcx
	addq	%rcx, %rdx
	movq	%rdx, x
	movq	%rdx, %rdi
LL105:
	movq	x, %rdx
	pushq	%rdx
	movq	$10, %rdx
	popq	%rcx
	cmp	%rdx, %rcx
	jl	LL106

	popq	%rbp
	movl	$0, %eax
	ret
