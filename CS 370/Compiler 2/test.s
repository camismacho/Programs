	.section	.rodata
.LC0:
	.string	"hello world!"
.LC1:
	.string	"goodbye"
.LC2:
	.string	"second"
.LC3:
	.string	"printf call %s %d\n"
.LC4:
	.string	"and more"
.LC5:
	.string	"one more"
.LC6:
	.string	"Hello World!"
	.text
	.globl	func
	.type	func, @function
func:
	pushq	%rbp
	movq	%rsp, %rbp
	movq	$.LC0, %rdi
	movl	$0, %eax
	call	puts

	popq	%rbp
	ret
	.globl	main
	.type	main, @function
main:
	pushq	%rbp
	movq	%rsp, %rbp
	movq	$.LC1, %rdi
	movq	$.LC2, %rsi
	movl	$42, %edx
	movl	$0, %eax
	call	func
	movq	$.LC3, %rdi
	movq	$.LC4, %rsi
	movq	$.LC5, %rdx
	movl	$42, %edx
	pushq	%rdx
	movl	$4, %edx
	pushq	%rdx
	movl	$5, %edx
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
	ret
