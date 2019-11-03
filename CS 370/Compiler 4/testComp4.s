	.data
x:	.word 0
y:	.word 0
	.section	.rodata
.LC0:
	.string	"hello world!\n"
.LC1:
	.string	"x=%d\n"
.LC2:
	.string	"goodbye"
.LC3:
	.string	"third arg"
.LC4:
	.string	"goodbye %s %d\n"
.LC5:
	.string	"second"
.LC6:
	.string	"Hello World!\n"
	.text
a:	.word 0
b:	.word 0
s:	.word 0
	.globl	func
	.type	func, @function
func:
	pushq	%rbp
	movq	%rsp, %rbp
	movq	$.LC0, %rdi
	movl	$0, %eax
	call	puts
	movl	$42, %edx
	pushq	%rdx
	movl	$12, %edx
	popq	%rcx
	addl	%ecx, %edx
	movl	%eax, x
	movl	x, %eax
	movl	%eax, %esi	
	movq	$.LC1, %rdi
	movl	x, %edx
	movl	$0, %eax
	call	printf

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
	movl	$42, %edx
	movq	$.LC2, %rdi
	movq	$.LC3, %rsi
	movl	$0, %eax
	call	func
	movq	$.LC4, %rdi
	movq	$.LC5, %rsi
	movl	$42, %edx
	pushq	%rdx
	movl	$4, %edx
	pushq	%rdx
	movl	x, %edx
	pushq	%rdx
	movl	$2, %edx
	popq	%rcx
	addl	%ecx, %edx
	popq	%rcx
	addl	%ecx, %edx
	popq	%rcx
	addl	%ecx, %edx
	movl	$0, %eax
	call	printf
	movq	$.LC6, %rdi
	movl	$0, %eax
	call	puts

	popq	%rbp
	movl	$0, %eax
	ret
